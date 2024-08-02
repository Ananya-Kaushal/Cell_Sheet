let container=document.getElementById("container");

//20 rows and 26 columns

//A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z

for (let i = 0; i <=26; i++) {
    let cell=document.createElement('div');

    cell.innerText =i == 0? "":String.fromCharCode(64+i);
    container.append(cell);
}
//65-90=> A-Z
//97-122=> a-z
