/*
                replaceAll
const myString = 'My Dog jumped on the bed.  My dog is a bad Dog';
const newString = myString.replaceAll('Dog', 'Cat');
const correctStr = myString.replaceAll(/[Dd]{1}og/g, 'cat');
correctStr;
"My cat jumped on the bed. My cat is a bad cat"
                toUpperCase
const myString = 'some string';
myString.toUpperCase();
"SOME STRING"
                substring
const result = myString[0].toUpperCase() + myString.substring(1, myString.length);
result
"Some string"
                trim
const externalData = [
    {
        title: 'How to code            ',
        author: 'Lera'
    },
    {
        title: 'What is vim?',
        author: 'Lera'
    },
        {
        title: 'How to do loops            ',
        author: 'Lera'
    }
];
for (let i = 0; i < externalData.length; i++) {
    const currentTitle = externalData[i].title;
    const currentAuthor = externalData[i].author;

    externalData[i].title = currentTitle.trim();
    externalData[i].author = currentAuthor.trim();
}
externalData
    OUTPUT: everything got trimmed in the right way
                match
const regex = /[a-z]+/
const str = 'dfvfscvewds112453rwvfds45';
regex.exec(str);
str.match(regex)
const regex2 = /[a-z]+/g