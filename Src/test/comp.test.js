const mul=(a,b)=>{
    return a*b
}

test('addd 2 no',()=>{
    const result=mul(3,4)

    //1 way // if(result!== 7)
    //     {throw new Error('Tc failed...')}

    //2 way
    expect(result).toBe(12)
})



test('addd 2 no',()=>{
    const result=mul(3,4)

    //1 way // if(result!== 7)
    //     {throw new Error('Tc failed...')}

    //2 way
    expect(result).toBe(13)
})
