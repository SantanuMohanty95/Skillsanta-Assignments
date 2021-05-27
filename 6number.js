function outer(id, innerCallback)
{
    innerCallback();  
}

function inner() {
    console.log('Hello');
}

outer(1, inner);