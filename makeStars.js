// for문을 사용해서 삼각형 나타내기
// 5층
//     *
//    ***
//   *****
//  *******
// *********
// const floor = 5;
// for(let i = 0; i < floor; i++){
//     let stars = "*";
//     let space = "";
//     for(let j = 6; j > i; j--){
//         space = space + " ";
//     }
//     for(let j = 0; i > j; j++){
//         stars += "**";
//     }
//     console.log(space + stars);
// }

// const floor = 5;

// for(let i = 0; i < floor; i++){
//     let stars = -1;
//     let space = -1;
//     for(let j = 6; j > i; j--){
//         space = space + 1;
//         space = space +""; //스페이스 값을 문자로 변환
//         process.stdout.write(space); //문자만 찍을수 있다.
//         space = space * 1; //문자를 숫자로 바꿔줌
//     }
//     for(let j = 0; i > j; j++){
//         stars += 1;
//         stars = stars + "";
//         process.stdout.write(stars);
//         stars = stars * 1;
//     }
//     console.log( );
// }


const totalFloor = 3;

for(let currentFloor = 0; currentFloor < totalFloor; currentFloor++){
    let stars = "";
    let space = ""
    for(let spaceLength = 0; spaceLength < totalFloor - currentFloor; spaceLength++){
        space += " "
    }

    for(let starLength = 0; starLength < (2 * currentFloor) + 1; starLength++){
        stars += "*"
    }
    
    console.log(space + stars)
}


for(let currentFloor = totalFloor -2; currentFloor >= 0; currentFloor--){
    let stars = "";
    let space = "";
    for(let starLength = 0; starLength < (2 * currentFloor) + 1; starLength++){
        stars += "*"
    }
    for(let spaceLength = 0; spaceLength < (totalFloor - currentFloor); spaceLength++){
        space += " "; 
    }
    console.log(space + stars)
}