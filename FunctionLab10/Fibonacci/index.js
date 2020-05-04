const bigInt= require("big-integer");
const redis= require("redis");
const bluebird= require("bluebird");

bluebird.promisifyAll(redis);

const client= redis.createClient(
    {
        host:'localhost',
        port: '6379'
    }
)

async function fibonacciExists(nth){
    let key=generateKey(nth);
    return (await client.existsAsync(key)) === 1;
}

async function getFibonacci(nth){
    let key= generateKey(nth);
    return await bigInt(client.getAsync(key)); 
}

async function setFibonacci(nth, nthValue){
    let key= generateKey(nth);
    await client.setAsync(key,nthValue.toString());
}

function generateKey(nth){
    return `fibonacci:nth: ${nth.toString()}`;
}

async function fibonacci(nth){
    nth= bigInt(nth);
    console.log(nth.toString());

    let nth_1= bigInt.one;
    let nth_2= bigInt.zero;
    let answer= bigInt.zero;

    if(nth.compare(0) < 0)
        throw "must be greater than 0";
    else if (nth.compare(0) == 0)
        answer= nth_2;
    else if (nth.compare(1) == 0)
        answer = nth_1;
    else if (await fibonacciExists(nth)){
        answer= await getFibonacci(nth);
    }else {
        let value1= bigInt(await fibonacci(nth.add(-1)));
        let value2= bigInt(await fibonacci(nth.add(-2)));
        answer= value1.add(value2);
        //answer = await(await fibonacci(nth.add(-1))).add(await fibonacci(nth.add(-2)));
        await setFibonacci(nth, answer);
    }

    return answer;
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth= req.body.nth;
    let answer = await fibonacci(nth);

    context.res={
        body: answer.toString()
    }
};