fighter class()

Properties:

name () // name of the fighter

health () // hit points of the fighter

weapon () // the weapon currently equipped by the fighter

Methods:

attack() // Allows the fighters to attack each other using their equipped weapon

defend() // Handles the fighter's defense against an attack, and reducing their health

changeWeapon() // change of the weapons

potion () // to heal the fighter

Weapon Class: // base classe

Properties:

name () // name of the weapon

damage () //The amount of damage the weapon can inflict

range () //The maximum effective range of the weapon in meters

Methods:

attack(): // perform an attack with the weapon

needsAmmunition() //Returns whether the weapon requires ammunition (default is False)

PrepareForAttack() // Prepares the weapon to attack, such as reloading if necessary, default does nothing

CloseCombatWeapon Class: // derived from weapon classe

Methods:

attack() // Overrides the attack method from the weapon class

PrepareForAttack()

Firearm Class: // derived from weapon classe

magazineSize() //the maximum capacity the firearm can hold in a magazine

currentAmmo() // number of bullets in the weapon

Methods:

attack() // Overrides the attack method from the weapon classe, uses the bullet form fighter class

needsAmmunition() // Returns True, indicating the weapon requires ammunition

PrepareForAttack() // reload if out of ammo

Bow Class: //derived from weapon class

Additional Property:

tension () //The tension level of the bowstring (low= bad shoot, high= good shoot)

arrows()

Methods:

attack() // Overrides the attack method from the weapon classe, uses the arrow form fighter class

needsAmmunition()

PrepareForAttack()

SlingShot Class (): // derived from weapon class

stones()

Methods:

attack(): // Overrides the attack method from the weapon class, uses the stone form fighter class

needsAmmunition()

PrepareForAttack()

Battlefield Class:

Property:

terrain () // type of the terrain

//the polymorphism is demonstrated by calling the appropriate attack method based on the weapon type, and the changeweapon method

//CloseCombatWeapon Classe and Firearm Classe inherite from weapon class
