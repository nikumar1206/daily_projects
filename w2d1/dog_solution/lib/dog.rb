class Dog
  def initialize(name)
    @name = name
  end

  def name
    @name
  end

  def breed
    @breed
  end

  def bark
    if @age > 3
      return @bark.upcase
    else
      return @bark.downcase
    end
  end

  def age
    @age
  end

  def age=(new_age)
    @age = new_age
  end

  def favorite_foods
    @favorite_foods
  end

  def favorite_food?(food_item)
    @favorite_foods.map(&:downcase).include?(food_item.downcase)
  end

  #class method because of the `self` as the receiver
  def self.whos_louder(dog_1, dog_2)
    if dog_1.bark.length > dog_2.bark.length
      return dog_1.name
    elsif dog_1.bark.length < dog_2.bark.length
      return dog_2.name
    else
      return nil
    end
  end
end
