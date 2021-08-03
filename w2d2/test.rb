class Test
    puts "In Class Def"
    p self # ?

    def self.test # ?
        puts "In self.test"
        p self # ?
    end
    
    def initialize(name)
        puts "In initialize"
        @name = name
        p self # ?
    end

    def say_hi
        puts "In say_hi"
        p self # ?
        puts "Hello #{@name}"
    end
end

t = Test.new("test_name")
Test.test
t.say_hi