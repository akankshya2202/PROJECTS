let c =0;
let cvalue = document.getElementById('count')
console.log(cvalue.textContent);
function incre()
{
    c++;
    cvalue.textContent = c
}
function decre()
{
    c--;
    cvalue.textContent = c
}
function reset()
{
    c = 0
    cvalue.textContent = c
}

