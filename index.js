let str = "abcadeecfb"
let arr = str.split("");
let a =[...new Set(arr)];
let b = a.toString();
let c  = b.replace(/,/g,'') 
console.log(c);





let  c1 = "abcadeecfb";
            let e = c1.split("")
            let num = new Map();

            for (let i=0 ; i< e.length; i++)
            {
                if(num.has(e[i]) == true){
                    let value = num.get(e[i])
                    num.set(e[i],value+1);
                }
                else{
                    num.set(e[i],1)
                }
            }
            for(let i of num){
                console.log(i[0] + "=" + i[1]);
            }
            
            