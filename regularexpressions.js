/*
const emailValidatorRegex = new RegExp('@./!"£$%^&*_+-=');
const userInput = 'invalidemail@g';
const isValid = emailValidatorRegex.test(userInput);
isValid
    FALSE

Identifiers - characters, special characters, phrases that we're trying to match
Quantifiers - 

const regex = new RegExp('g');
const string1 = 'my favorite food is steak';
const string2 = 'my favorite thing to do is code';
regex.test(string1);
    FALSE
regex.test(string2);
    TRUE
                ANOTHER EXAMPLE
const regex2 = new RegExp('FavoritE');
const string3 = 'my favorite food is steak';
const string4 = 'my favorite thing to do is code';
regex2.test(string3);
    FALSE
regex2.test(string4);
    FALSE


                TYPES OF IDENTIFIERS
/g/
/FavoritE/ 
those are examples of regular expressions

/favorite/.test(string1)
    OUTPUT: TRUE
    it's just another syntax


/A-Z/.test(string1)
    OUTPUT: False
    because there's no upper cases in that string

/./.test(string1)
    OUTPUT: true
    period represents any period

/\d/ numbers
/\s/ space
/\w/ matches all numbers and letters
/$f/ shows string ends with letter 'f'

/a-z/ - check if there's any lower case letters
/a-z/.exec - matches just 1 first character


                    QUALIFIERS
/[a-z]*/.exec - // any lower case letter 
/*
/[a-z]+/.exec - matches one or more proceding character
/[a-z]?/.exec - zero or one index, represents the first letter
/[a-z]{5}/.exec -matches 5 characters
/[a-z]{2, 6}/.exec 

                    FLAG
const regex = /[a-z]+/g 
// flag g!!!


                    EXAMPLE!!!!!!!!!!!

const str = 'hello world, 2023  @ more of a string';
const regex = /[a-z ]+/

/^[a-z ]+,[0-9]+@[a-z ]+$/.exec(str); and /.+/.exec(str); 
are the same