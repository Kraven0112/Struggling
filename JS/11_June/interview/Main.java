class Animal {
    public void makeSound() {
      System.out.println("Animal sound");
    }
  }
  
  class Dog extends Animal {
    @Override
    public void makeSound() {
      System.out.println("Woof!");
    }
  }
  
  public class Main {
    public static void main(String[] args) {
      Animal animal = new Animal();
      animal.makeSound(); // Prints "Woof!"
    }
  }