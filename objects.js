/*
const objectVariable = { prop1: 20, prop2: 50 };
objectVariable
    OUTPUT Object { prop1: 20, prop2: 50 }
objectVariable[0]
    OUPUT doesnt work
objectVariable.prop1
    OUTPUT 20
const nestedObject = {
    layer1: {
        layer2: {
            layer3: {
                targetValue:20
            }
        }
    }
};
nestedObject.layer1.layer2.layer3.targetValue;
    OUTPUT 20

objectVariable['prop1'];
    OUTPUT 20


const myObj = {
    property1: "some value",
}
myObj.property1;
    OUTPUT "some value"
myObj['propery1'];
    OUTPUT "some value"