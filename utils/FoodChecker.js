const meats = ["bacon", "beef", "boar", "chicken", "chicken", "chops", "crab", "goat", "ham", "kebab", "keema", "kidney ", "lamb", "liver", "liver", "liver", "meat", "meat stock", "mutton ", "octopus", "oyster", "partridge", "pork", "skinned", "squid", "stock", "stock", "turkey", "bone", "bones", "brisket", "bull", "caviar", "chorizo", "clam", "crab", "duck", "fish", "foie gras", "ham", "kabab", "lobster", "ox", "pastrami", "phuket", "pig", "pork", "prawn", "salmon", "sausage", "shrimp", "steak", "tuna", "veal"];
const vegetarians = ["milk", "curd", "cheese", "yogurt", "mushroom", "egg", "mayonnaise", "tofu", "margarine", "honey"];
const lactose = ["milk", "curd", "cheese", "cream", "yogurt", "butter", "custard", "buttermilk", "ghee"];
const glutens = ["bread"];
const nuts = ["walnut", "peanut"];


function isVegan(ingredients) {
   if(hasMeat(ingredients)) {
       return false;
   }
   for(let ing of ingredients) {
        if(vegetarians.includes(ing.toLowerCase())) {
            return false;
        }
    }
    return true;
}

function isVegetarian(ingredients) {
    if(hasMeat(ingredients))
        return false;
    return true;
}

function hasMeat(ingredients) {
    for(let ing of ingredients) {
        if(meats.includes(ing.toLowerCase())) {
            return true;
        }
    }
    return false;
}
function hasLactose(ingredients) {
    for(let ing of ingredients) {
        if(lactose.includes(ing.toLowerCase())) {
            return true;
        }
    }
    return false;
}

function hasNuts(ingredients) {
    for(let ing of ingredients) {
        if(nuts.includes(ing.toLowerCase())) {
            return true;
        }
    }
    return false;
}

function hasGluten(ingredients) {
    for(let ing of ingredients) {
        if(glutens.includes(ing.toLowerCase())) {
            return true;
        }
    }
    return false;
}
