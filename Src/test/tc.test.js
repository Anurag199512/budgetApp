
const add=(a,b)=>{
    return a+b
}

test('addd 2 no',()=>{
    const result=add(3,4)

    //1 way // if(result!== 7)
    //     {throw new Error('Tc failed...')}

    //2 way
    expect(result).toBe(7)
})
