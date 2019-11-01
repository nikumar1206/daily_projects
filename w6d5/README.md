# W6D5

## Core Concepts

- ERB notation
- render vs redirect
- helper methods and instance variable access
- before_action

## Learning Goals

### 99 Cats

- Be able to build a model with validations and default values
- Know how to build Rails views for new and edit forms
  - Know how to use a hidden field to set the form's method
  - Be able to separate the form out into a partial that both forms use
  - Be able to show data and actions based on the form's type
  - Know how to use `select` and `input` HTML elements
- Be able to add methods to a Rails model

## Discussion

- Transaction of approving a cat rental request:

  ```ruby
    def approve!
      raise 'not pending' unless self.status == 'PENDING'
      transaction do
        self.status = 'APPROVED'
        self.save!

        # when we approve this request, we reject all other overlapping
        # requests for this cat.
        overlapping_pending_requests.each do |req|
          req.update!(status: 'DENIED')
        end
      end
    end
  ```

  Will roll back if any update fails.

- Talk through the logic of `overlapping_requests`:

  ```ruby
    def overlapping_requests
      # ======================================
      #
      # Ranges can overlap in several ways:
      #
      #   |-----|       |-----|     |---|
      #       |-----|   |-----|   |-------|
      #     (2x)                    (2x)
      #
      # ======================================
      #
      # However, it is easier to think of the
      # two cases where they do not overlap:
      #
      #    [Case 1]
      #
      #        A              B
      #    |-------|      |-------|
      #    A(s)    A(e)   B(s)    B(e)
      #
      # The start point of B comes after the
      # end point of A. Thus: B(s) > A(e)
      #
      #
      #    [Case 2]
      #
      #        B              A
      #    |-------|      |-------|
      #    B(s)    B(e)   A(s)    A(e)
      #
      # The start point of A comes after the
      # end point of B. Thus: A(s) > B(e)
      #
      # ======================================
      #
      # Taking those two cases, we can say
      # there's no overlap when:
      #
      #   B(s) > A(e) || A(s) > B(e)
      #
      # ======================================
      #
      # We can negate this to get all cases
      # where there must be overlap:
      #
      #   !( B(s) > A(e) || A(s) > B(e) )
      #
      # Personally, I find this most clear.
      #
      # In order for overlap to occur, the
      # other range cannot be entirely before
      # it or entirely after it.
      #
      # ======================================
      #
      # You could distribute the negation:
      #
      #   !( B(s) > A(e) ) && !( A(s) > B(e) )
      #
      # And take it even further, making it
      # shorter, but perhaps less intuitive:
      #
      #   B(s) <= A(e) && A(s) <= B(e)
      #
      # ======================================

      # We want:
      # 1. A different request
      # 2. That is for the same cat.
      # 3. That overlaps.

      CatRentalRequest
        .where.not(id: self.id)
        .where(cat_id: cat_id)
        .where.not('start_date > :end_date OR end_date < :start_date',
                  start_date: start_date, end_date: end_date)
    end
  ```

- Member routes approve and deny. Three options:

  1.

  ```ruby
  resources :cat_rental_requests, only: [:new, :create] do
    member do
      post :approve
      post :deny
    end
  end
  ```

  - Result:

    ```bash
    POST  /cat_rental_requests/:id/approve(.:format)
    POST  /cat_rental_requests/:id/deny(.:format)
    ```

  2.

  ```ruby
    resources :cat_rental_requests, only: [:new, :create] do
      post :approve, on: :member
      post :deny, on: :member
    end
  ```

  - Result:

    ```bash
    POST  /cat_rental_requests/:id/approve(.:format)
    POST  /cat_rental_requests/:id/deny(.:format)
    ```

  3.

  ```ruby
    resources :cat_rental_requests, only: [:new, :create] do
      post :approve
      post :deny
    end
  ```

  - Result:

    ```bash
    POST  /cat_rental_requests/:cat_rental_request_id/approve(.:format)
    POST  /cat_rental_requests/:cat_rental_request_id/deny(.:format)
    ```

  If we didn't want an `id` wildcard, we could do

  ```ruby
  resources :cat_rental_requests, only: [:new, :create] do
    collection do
      post :approve
      post :deny
    end
  end
  ```

  or

  ```ruby
  resources :cat_rental_requests, only: [:new, :create] do
    post :approve, on: :collection
    post :deny, on: :collection
  end
  ```
