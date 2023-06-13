const add = (a,b) =>
{
    return a+b;
};

const sub = (a,b) =>
{
    return a-b;
};

const mult = (a,b) =>
{
    return a*b;
};

const name = "Anjali";
//module.exports = add;
//module.exports = name;

/*
module.exports.add = add;
module.exports.sub = sub;
module.exports.mult = mult;
*/
//  or
module.exports = {add,sub,mult}
