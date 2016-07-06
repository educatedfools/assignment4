//STEP 1
//var ANIMAL = ANIMAL || {};
//ANIMAL.Dog = function () {};
//ANIMAL.Cat = function () {};

//STEP 2
//function Dog() {}
//var Cat = {};

//STEP 3
//var boxer = new Dog();

//STEP 4
//function Animal() {
//    window.console.log('The animal has been created');
//}
//var dog = new Animal();

//STEP 5
//function Animal(type) {
//    this._type = type;
//    window.console.log(type);
//}
//var dog = new Animal("boxer");

//STEP 6
//function Animal(type, breed, color, height, length) {
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//    window.console.log('this ' + breed + ' is of ' + color + ' color, ' + height + ' height, and ' + length + ' length.');
//}
//var boxer = new Animal("large", "boxer", "brown", "medium", "stocky");

//STEP 7
//var i;
//for (i in boxer) {
//    window.console.log(boxer[i]);
//}

//STEP 8
//var AnimalSound = {
//    speak: function (type) {
//        if (type === 'bark') {
//            window.console.log('the dog barks');
//        } else if (type === 'meow') {
//            window.console.log('the cat meows');
//        }
//    }
//};
//AnimalSound.speak('bark');

//STEP 9
//function Animal(type, breed, color, height, length) {
//    var _type = type;
//    var _breed = breed;
//    var _color = color;
//    var _height = height;
//    var _length = length;
//    function checkType() {
//        if (type === "dog") {
//            return "dog";
//        } else if (type === "cat") {
//            return "cat";
//        }
//    }
//}
//function speak() {
//    window.console.log('i\'ll come back to this one...');
//}

//STEP 10

//PART 2
// var recipe = {
//    'title': 'curry',
//    'servings': 4,
//    'ingredients': ['cream', 'curry powder', 'ghee', 'masala']
//};
//
//window.console.log(recipe.title);
//window.console.log('servings: ' + recipe.servings);
//window.console.log('ingredients:');
//var i;
//for (i = 0; i < recipe.ingredients.length; i++) {
//    window.console.log('-' + recipe.ingredients[i]);
//}

//PART 3
var books = [
    {
        title: 'the alchemist',
        author: 'Paul Coelho',
        alreadyRead: true
    },
    
    {
        title: 'game of thrones',
        author: 'George RR Martin',
        alreadyRead: true
    },
    
    {
        title: 'the divine comedy',
        author: 'Dante Alighieri',
        alreadyRead: true
    },
    
    {
        title: 'heart of darkness',
        author: 'Joseph Conrad',
        alreadyRead: false
    },
    
    {
        title: 'One thousand and one Nights',
        author: 'various',
        alreadyRead: true
    }
];
var i, result, bookDisplay;
for (i = 0; i < books.length; i++) {
    result = books[i];
    bookDisplay = result.title + "\"" + ' by ' + result.author;
    if (result.alreadyRead) {
        window.console.log('I\'ve read "' + bookDisplay);
    } else {
        window.console.log('I haven\'t read "' + bookDisplay);
    }
}