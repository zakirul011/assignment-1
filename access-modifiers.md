Access Modifiers in TypeScript

Access modifiers control the visibility and accessibility of class properties and methods.

1. Public
   Accessible from anywhere.
   Default access modifier in TypeScript.
   ts
   class User {
   public name = "John";
   }

2. Private
   Accessible only within its own class.
   Cannot be accessed outside the class or by child classes.
   ts
   class User {
   private password = "12345";
   }

3. Protected
   Accessible within its own class and its child classes (extends).
   Cannot be accessed directly from outside the class.
   ts
   class User {
   protected role = "user";
   }

class Admin extends User {
getRole() {
return this.role;
}
}

4. Readonly
   Value can only be assigned during declaration or inside the constructor.
   Cannot be reassigned afterward.
   ts
   class User {
   readonly id = 101;
   }

Summary
Modifier Accessibility
public Anywhere
private Own class only
protected Own class + child classes
readonly Cannot be reassigned after initialization

Note: readonly is a property modifier, not an access modifier.
