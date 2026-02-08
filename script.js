function stringChop(str, size) {
 let arr=[];
	let count=1;
	let temp="";
	for(let i=0;i<str.length;i++)
		{
			temp=temp+str[i];
			if(count%size==0 || i==str.length-1)
			{
				arr.push(temp);
				temp="";
        count=0;
			}
			count++;
		}
    return arr;
}


Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
