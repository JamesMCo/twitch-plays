// Game logic

// - -> empty
// i -> light blue (line)
// j -> dark blue
// l -> orange
// o -> yellow (square)
// s -> green
// t -> purple
// z -> red

// Next/Hold Displays
no_piece ='<tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr>'; 
i_piece = '<tr><td></td><td style="background-color: #03A9F4"></td></tr><tr><td></td><td style="background-color: #03A9F4"></td></tr><tr><td></td><td style="background-color: #03A9F4"></td></tr><tr><td></td><td style="background-color: #03A9F4"></td></tr>';
j_piece = '<tr><td></td><td style="background-color: #0D47A1"></td></tr><tr><td></td><td style="background-color: #0D47A1"></td></tr><tr><td style="background-color: #0D47A1"></td><td style="background-color: #0D47A1"></td></tr><tr><td></td><td></td></tr>';
l_piece = '<tr><td style="background-color: #FF9800"></td><td></td></tr><tr><td style="background-color: #FF9800"></td><td></td></tr><tr><td style="background-color: #FF9800"></td><td style="background-color: #FF9800"></td></tr><tr><td></td><td></td></tr>';
o_piece = '<tr><td style="background-color: #FFEB3B"></td><td style="background-color: #FFEB3B"></td></tr><tr><td style="background-color: #FFEB3B"></td><td style="background-color: #FFEB3B"></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr>';
s_piece = '<tr><td style="background-color: #66BB6A"></td><td></td></tr><tr><td style="background-color: #66BB6A"></td><td style="background-color: #66BB6A"></td></tr><tr><td></td><td style="background-color: #66BB6A"></td></tr><tr><td></td><td></td></tr>';
t_piece = '<tr><td style="background-color: #9C27B0"></td><td></td></tr><tr><td style="background-color: #9C27B0"></td><td style="background-color: #9C27B0"></td></tr><tr><td style="background-color: #9C27B0"></td><td></td></tr><tr><td></td><td></td></tr>';
z_piece = '<tr><td></td><td style="background-color: #F44336"></td></tr><tr><td style="background-color: #F44336"></td><td style="background-color: #F44336"></td></tr><tr><td style="background-color: #F44336"></td><td></td></tr><tr><td></td><td></td></tr>';

calcPieceDimensions = () =>
{
    width;
    height;
    switch (currentPiece)
            {
                case "i":
                    if (curRotation === 0)
                    {
                        width  = 1;
                        height = 4;
                    }
                    else
                    {
                        width  = 4;
                        height = 1;
                    }
                    break;
                case "j":
                    if (curRotation === 0 || curRotation == 2)
                    {
                        width  = 2;
                        height = 3;
                    }
                    else
                    {
                        width  = 3;
                        height = 2;
                    }
                    break;
                case "l":
                    if (curRotation === 0 || curRotation == 2)
                    {
                        width  = 2;
                        height = 3;
                    }
                    else
                    {
                        width  = 3;
                        height = 2;
                    }
                    break;
                case "o":
                    width  = 2;
                    height = 2;
                    break;
                case "s":
                    if (curRotation === 0 || curRotation == 2)
                    {
                        width  = 2;
                        height = 3;
                    }
                    else
                    {
                        width  = 3;
                        height = 2;
                    }
                    break;
                case "t":
                    if (curRotation === 0 || curRotation == 2)
                    {
                        width  = 2;
                        height = 3;
                    }
                    else
                    {
                        width  = 3;
                        height = 2;
                    }
                    break;
                case "z":
                    if (curRotation === 0 || curRotation == 2)
                    {
                        width  = 2;
                        height = 3;
                    }
                    else
                    {
                        width  = 3;
                        height = 2;
                    }
                    break;
            }
}

chooseNextPiece = () =>
{
    return ["i", "j", "l", "o", "s", "t", "z"][Math.floor(Math.random() * 7)];
}

renderBoard = () =>
{
    for (var i = 0; i < board.length; i++)
    {
        for (var j = 0; j < board[i].length; j++)
        {
            switch (board[i][j])
            {
                case "-":
                    document.querySelector("#cell-" + ((i*10)+j)).style["background-color"] = "#ECEFF1";
                    break;
                case "i":
                    document.querySelector("#cell-" + ((i*10)+j)).style["background-color"] = "#03A9F4";
                    break;
                case "j":
                    document.querySelector("#cell-" + ((i*10)+j)).style["background-color"] = "#0D47A1";
                    break;
                case "l":
                    document.querySelector("#cell-" + ((i*10)+j)).style["background-color"] = "#FF9800";
                    break;
                case "o":
                    document.querySelector("#cell-" + ((i*10)+j)).style["background-color"] = "#FFEB3B";
                    break;
                case "s":
                    document.querySelector("#cell-" + ((i*10)+j)).style["background-color"] = "#66BB6A";
                    break;
                case "t":
                    document.querySelector("#cell-" + ((i*10)+j)).style["background-color"] = "#9C27B0";
                    break;
                case "z":
                    document.querySelector("#cell-" + ((i*10)+j)).style["background-color"] = "#F44336";
                    break;
            }
        }

        switch (curRotation)
        {
            case 0:
                switch (currentPiece)
                {
                    case "i":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX)).style["background-color"] = "#03A9F4";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX)).style["background-color"] = "#03A9F4";
                        document.querySelector("#cell-" + (((curPosY+2)*10)+curPosX)).style["background-color"] = "#03A9F4";
                        document.querySelector("#cell-" + (((curPosY+3)*10)+curPosX)).style["background-color"] = "#03A9F4";
                        break;
                    case "j":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+1)).style["background-color"] = "#0D47A1";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+1)).style["background-color"] = "#0D47A1";
                        document.querySelector("#cell-" + (((curPosY+2)*10)+curPosX+1)).style["background-color"] = "#0D47A1";
                        document.querySelector("#cell-" + (((curPosY+2)*10)+curPosX)).style["background-color"] = "#0D47A1";
                        break;
                    case "l":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX)).style["background-color"] = "#FF9800";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX)).style["background-color"] = "#FF9800";
                        document.querySelector("#cell-" + (((curPosY+2)*10)+curPosX)).style["background-color"] = "#FF9800";
                        document.querySelector("#cell-" + (((curPosY+2)*10)+curPosX+1)).style["background-color"] = "#FF9800";
                        break;
                    case "o":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX)).style["background-color"] = "#FFEB3B";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+1)).style["background-color"] = "#FFEB3B";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX)).style["background-color"] = "#FFEB3B";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+1)).style["background-color"] = "#FFEB3B";
                        break;
                    case "s":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX)).style["background-color"] = "#66BB6A";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX)).style["background-color"] = "#66BB6A";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+1)).style["background-color"] = "#66BB6A";
                        document.querySelector("#cell-" + (((curPosY+2)*10)+curPosX+1)).style["background-color"] = "#66BB6A";
                        break;
                    case "t":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX)).style["background-color"] = "#9C27B0";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX)).style["background-color"] = "#9C27B0";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+1)).style["background-color"] = "#9C27B0";
                        document.querySelector("#cell-" + (((curPosY+2)*10)+curPosX)).style["background-color"] = "#9C27B0";
                        break;
                    case "z":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+1)).style["background-color"] = "#F44336";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+1)).style["background-color"] = "#F44336";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX)).style["background-color"] = "#F44336";
                        document.querySelector("#cell-" + (((curPosY+2)*10)+curPosX)).style["background-color"] = "#F44336";
                        break;
                }
                break;
            case 1:
                switch (currentPiece)
                {
                    case "i":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX)).style["background-color"] = "#03A9F4";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+1)).style["background-color"] = "#03A9F4";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+2)).style["background-color"] = "#03A9F4";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+3)).style["background-color"] = "#03A9F4";
                        break;
                    case "j":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX)).style["background-color"] = "#0D47A1";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX)).style["background-color"] = "#0D47A1";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+1)).style["background-color"] = "#0D47A1";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+2)).style["background-color"] = "#0D47A1";
                        break;
                    case "l":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX)).style["background-color"] = "#FF9800";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+1)).style["background-color"] = "#FF9800";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+2)).style["background-color"] = "#FF9800";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX)).style["background-color"] = "#FF9800";
                        break;
                    case "s":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+1)).style["background-color"] = "#66BB6A";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+2)).style["background-color"] = "#66BB6A";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX)).style["background-color"] = "#66BB6A";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+1)).style["background-color"] = "#66BB6A";
                        break;
                    case "t":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX)).style["background-color"] = "#9C27B0";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+1)).style["background-color"] = "#9C27B0";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+2)).style["background-color"] = "#9C27B0";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+1)).style["background-color"] = "#9C27B0";
                        break;
                    case "z":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX)).style["background-color"] = "#F44336";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+1)).style["background-color"] = "#F44336";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+1)).style["background-color"] = "#F44336";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+2)).style["background-color"] = "#F44336";
                        break;
                }
                break;
            case 2:
                switch (currentPiece)
                {
                    case "j":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX)).style["background-color"] = "#0D47A1";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+1)).style["background-color"] = "#0D47A1";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX)).style["background-color"] = "#0D47A1";
                        document.querySelector("#cell-" + (((curPosY+2)*10)+curPosX)).style["background-color"] = "#0D47A1";
                        break;
                    case "l":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX)).style["background-color"] = "#FF9800";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+1)).style["background-color"] = "#FF9800";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+1)).style["background-color"] = "#FF9800";
                        document.querySelector("#cell-" + (((curPosY+2)*10)+curPosX+1)).style["background-color"] = "#FF9800";
                        break;
                    case "t":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+1)).style["background-color"] = "#9C27B0";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+1)).style["background-color"] = "#9C27B0";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX)).style["background-color"] = "#9C27B0";
                        document.querySelector("#cell-" + (((curPosY+2)*10)+curPosX+1)).style["background-color"] = "#9C27B0";
                        break;
                }
                break;
            case 3:
                switch (currentPiece)
                {
                    case "j":
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX)).style["background-color"] = "#0D47A1";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+1)).style["background-color"] = "#0D47A1";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+2)).style["background-color"] = "#0D47A1";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+2)).style["background-color"] = "#0D47A1";
                        break;
                    case "l":
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX)).style["background-color"] = "#FF9800";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+1)).style["background-color"] = "#FF9800";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+2)).style["background-color"] = "#FF9800";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+2)).style["background-color"] = "#FF9800";
                        break;
                    case "t":
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX)).style["background-color"] = "#9C27B0";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+1)).style["background-color"] = "#9C27B0";
                        document.querySelector("#cell-" + (((curPosY+1)*10)+curPosX+2)).style["background-color"] = "#9C27B0";
                        document.querySelector("#cell-" + ((curPosY*10)+curPosX+1)).style["background-color"] = "#9C27B0";
                        break;
                }
                break;
        }
    }
    switch (nextPiece)
    {
        case "i":
            document.querySelector("#next").innerHTML = i_piece;
            break;
        case "j":
            document.querySelector("#next").innerHTML = j_piece;
            break;
        case "l":
            document.querySelector("#next").innerHTML = l_piece;
            break;
        case "o":
            document.querySelector("#next").innerHTML = o_piece;
            break;
        case "s":
            document.querySelector("#next").innerHTML = s_piece;
            break;
        case "t":
            document.querySelector("#next").innerHTML = t_piece;
            break;
        case "z":
            document.querySelector("#next").innerHTML = z_piece;
            break;
    }
    switch (swapPiece)
    {
        case "-":
            document.querySelector("#hold").innerHTML = no_piece;
            break;
        case "i":
            document.querySelector("#hold").innerHTML = i_piece;
            break;
        case "j":
            document.querySelector("#hold").innerHTML = j_piece;
            break;
        case "l":
            document.querySelector("#hold").innerHTML = l_piece;
            break;
        case "o":
            document.querySelector("#hold").innerHTML = o_piece;
            break;
        case "s":
            document.querySelector("#hold").innerHTML = s_piece;
            break;
        case "t":
            document.querySelector("#hold").innerHTML = t_piece;
            break;
        case "z":
            document.querySelector("#hold").innerHTML = z_piece;
            break;
    }
}

dropPiece = () =>
{
    if (dropThisCycle)
    {
        if (isFree(curPosX, curPosY+1))
        {
            curPosY++;
        }
        else
        {
            placePiece(curPosX, curPosY);

            currentPiece = nextPiece;
            nextPiece = chooseNextPiece();
            
            curPosX       = 4;
            curPosY       = 0;
            curRotation   = 0;
            calcPieceDimensions();
            swapped       = false;
            dropThisCycle = true;

            if (!isFree(curPosX, curPosY))
            {
                document.querySelector("#gameover").style.display = "block";
                setTimeout(() => {location.reload();}, 5000);
            }
        }
    }
    else
    {
        dropThisCycle = true;
    }

    renderBoard();
}

isFree = (x, y) =>
{
    if (!(x >= 0 && (x + width <= 10) && (y + height <= 20)))
    {
        return false;
    }
    switch (curRotation)
    {
        case 0:
            switch (currentPiece)
            {
                case "i":
                    return board[y][x]     == "-" &&
                           board[y+1][x]   == "-" &&
                           board[y+2][x]   == "-" &&
                           board[y+3][x]   == "-";
                case "j":
                    return board[y][x+1]   == "-" &&
                           board[y+1][x+1] == "-" &&
                           board[y+2][x+1] == "-" &&
                           board[y+2][x]   == "-";
                case "l":
                    return board[y][x]     == "-" &&
                           board[y+1][x]   == "-" &&
                           board[y+2][x]   == "-" &&
                           board[y+2][x+1] == "-";
                case "o":
                    return board[y][x]     == "-" &&
                           board[y][x+1]   == "-" &&
                           board[y+1][x]   == "-" &&
                           board[y+1][x+1] == "-";
                case "s":
                    return board[y][x]     == "-" &&
                           board[y+1][x]   == "-" &&
                           board[y+1][x+1] == "-" &&
                           board[y+2][x+1] == "-";
                case "t":
                    return board[y][x]     == "-" &&
                           board[y+1][x]   == "-" &&
                           board[y+1][x+1] == "-" &&
                           board[y+2][x]   == "-";
                case "z":
                    return board[y][x+1]   == "-" &&
                           board[y+1][x+1] == "-" &&
                           board[y+1][x]   == "-" &&
                           board[y+2][x]   == "-";
            }
        case 1:
            switch (currentPiece)
            {
                case "i":
                    return board[y][x]     == "-" &&
                           board[y][x+1]   == "-" &&
                           board[y][x+2]   == "-" &&
                           board[y][x+3]   == "-";
                case "j":
                    return board[y][x]     == "-" &&
                           board[y+1][x]   == "-" &&
                           board[y+1][x+1] == "-" &&
                           board[y+1][x+2] == "-";
                case "l":
                    return board[y][x]     == "-" &&
                           board[y][x+1]   == "-" &&
                           board[y][x+2]   == "-" &&
                           board[y+1][x]   == "-";
                case "s":
                    return board[y][x+1]   == "-" &&
                           board[y][x+2]   == "-" &&
                           board[y+1][x]   == "-" &&
                           board[y+1][x+1] == "-";
                case "t":
                    return board[y][x]     == "-" &&
                           board[y][x+1]   == "-" &&
                           board[y+1][x+1] == "-" &&
                           board[y][x+2]   == "-";
                case "z":
                    return board[y][x]     == "-" &&
                           board[y][x+1]   == "-" &&
                           board[y+1][x+1] == "-" &&
                           board[y+1][x+2] == "-";
            }
        case 2:
            switch (currentPiece)
            {
                case "j":
                    return board[y][x]     == "-" &&
                           board[y][x+1]   == "-" &&
                           board[y+1][x]   == "-" &&
                           board[y+2][x]   == "-";
                case "l":
                    return board[y][x]     == "-" &&
                           board[y][x+1]   == "-" &&
                           board[y+1][x+1] == "-" &&
                           board[y+1][x+1] == "-";
                case "t":
                    return board[y][x+1]   == "-" &&
                           board[y+1][x+1] == "-" &&
                           board[y+1][x]   == "-" &&
                           board[y+2][x+1] == "-";
            }
        case 3:
            switch (currentPiece)
            {
                case "j":
                    return board[y][x]     == "-" &&
                           board[y][x+1]   == "-" &&
                           board[y][x+2]   == "-" &&
                           board[y+1][x+2] == "-";
                case "l":
                    return board[y][x+2]   == "-" &&
                           board[y+1][x+2] == "-" &&
                           board[y+1][x+1] == "-" &&
                           board[y+1][x]   == "-";
                case "t":
                    return board[y][x+1]   == "-" &&
                           board[y+1][x]   == "-" &&
                           board[y+1][x+1] == "-" &&
                           board[y+1][x+2] == "-";
            }
    }
}

placePiece = (x, y) =>
{
    switch (curRotation)
    {
        case 0:
            switch (currentPiece)
            {
                case "i":
                    board[y][x]     = "i";
                    board[y+1][x]   = "i";
                    board[y+2][x]   = "i";
                    board[y+3][x]   = "i";
                    break;
                case "j":
                    board[y][x+1]   = "j";
                    board[y+1][x+1] = "j";
                    board[y+2][x+1] = "j";
                    board[y+2][x]   = "j";
                    break;
                case "l":
                    board[y][x]     = "l";
                    board[y+1][x]   = "l";
                    board[y+2][x]   = "l";
                    board[y+2][x+1] = "l";
                    break;
                case "o":
                    board[y][x]     = "o";
                    board[y][x+1]   = "o";
                    board[y+1][x]   = "o";
                    board[y+1][x+1] = "o";
                    break;
                case "s":
                    board[y][x]     = "s";
                    board[y+1][x]   = "s";
                    board[y+1][x+1] = "s";
                    board[y+2][x+1] = "s";
                    break;
                case "t":
                    board[y][x]     = "t";
                    board[y+1][x]   = "t";
                    board[y+1][x+1] = "t";
                    board[y+2][x]   = "t";
                    break;
                case "z":
                    board[y][x+1]   = "z";
                    board[y+1][x+1] = "z";
                    board[y+1][x]   = "z";
                    board[y+2][x]   = "z";
                    break;
            }
            break;
        case 1:
            switch (currentPiece)
            {
                case "i":
                    board[y][x]     = "i";
                    board[y][x+1]   = "i";
                    board[y][x+2]   = "i";
                    board[y][x+3]   = "i";
                    break;
                case "j":
                    board[y][x]     = "j";
                    board[y+1][x]   = "j";
                    board[y+1][x+1] = "j";
                    board[y+1][x+2] = "j";
                    break;
                case "l":
                    board[y][x]     = "l";
                    board[y][x+1]   = "l";
                    board[y][x+2]   = "l";
                    board[y+1][x]   = "l";
                    break;
                case "s":
                    board[y][x+1]   = "s";
                    board[y][x+2]   = "s";
                    board[y+1][x]   = "s";
                    board[y+1][x+1] = "s";
                    break;
                case "t":
                    board[y][x]     = "t";
                    board[y][x+1]   = "t";
                    board[y+1][x+1] = "t";
                    board[y][x+2]   = "t";
                    break;
                case "z":
                    board[y][x]     = "z";
                    board[y][x+1]   = "z";
                    board[y+1][x+1] = "z";
                    board[y+1][x+2] = "z";
                    break;
            }
            break;
        case 2:
            switch (currentPiece)
            {
                case "j":
                    board[y][x]     = "j";
                    board[y][x+1]   = "j";
                    board[y+1][x]   = "j";
                    board[y+2][x]   = "j";
                    break;
                case "l":
                    board[y][x]     = "l";
                    board[y][x+1]   = "l";
                    board[y+1][x+1] = "l";
                    board[y+2][x+1] = "l";
                    break;
                case "t":
                    board[y][x+1]   = "t";
                    board[y+1][x+1] = "t";
                    board[y+1][x]   = "t";
                    board[y+2][x+1] = "t";
                    break;
            }
            break;
        case 3:
            switch (currentPiece)
            {
                case "j":
                    board[y][x]     = "j";
                    board[y][x+1]   = "j";
                    board[y][x+2]   = "j";
                    board[y+1][x+2] = "j";
                    break;
                case "l":
                    board[y][x+2]   = "l";
                    board[y+1][x+2] = "l";
                    board[y+1][x+1] = "l";
                    board[y+1][x]   = "l";
                    break;
                case "t":
                    board[y][x+1]   = "t";
                    board[y+1][x]   = "t";
                    board[y+1][x+1] = "t";
                    board[y+1][x+2] = "t";
                    break;
            }
            break;
    }
    for (var i = 0; i < board.length; i++) {
        if (!board[i].includes("-"))
        {
            board.splice(i, 1);
            i--;
        }
    }
    while (board.length != 20)
    {
        board.unshift(["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);
    }
}

board = [["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
         ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]]

currentPiece  = chooseNextPiece();
nextPiece     = chooseNextPiece();
curPosX       = 4;
curPosY       = 0;
width         = 0;
height        = 0;
curRotation   = 0;
calcPieceDimensions();
swapPiece     = "-";
swapped       = false;
dropThisCycle = true;

renderBoard();
setInterval(dropPiece, 1000);


// Networking

server = new WebSocket("ws://51.141.113.248:80");
server.onmessage = (event) =>
{
    switch (event.data)
    {
        case "l":
            if (isFree(curPosX - 1, curPosY))
            {
                curPosX--;
            }
            break;
        case "r":
            if (isFree(curPosX + 1, curPosY))
            {
                curPosX++;
            }
            break;
        case "u":
            if (currentPiece == "i" || currentPiece == "s" || currentPiece == "z")
            {
                curRotation = (curRotation + 1) % 2;
                if (!isFree(curPosX, curPosY))
                {
                    curRotation = (curRotation + 1) % 2;
                }
            }
            else if (currentPiece != "o")
            {
                curRotation = (curRotation + 1) % 4;
                if (!isFree(curPosX, curPosY))
                {
                    curRotation = (curRotation + 3) % 4;
                }
            }
            calcPieceDimensions();
            break;
        case "d":
            if (isFree(curPosX, curPosY + 1))
            {
                curPosY++;
                dropThisCycle = false;
            }
            break;
        case "c":
            if (swapped)
            {
                break;
            }

            if (swapPiece == "-")
            {
                swapPiece = currentPiece;

                currentPiece = nextPiece;
                nextPiece = chooseNextPiece();
                
                curPosX       = 4;
                curPosY       = 0;
                curRotation   = 0;
                calcPieceDimensions();
                swapped       = true;
                dropThisCycle = true;
            }
            else
            {
                temp = currentPiece;
                currentPiece = swapPiece;
                swapPiece = temp;

                curPosX       = 4;
                curPosY       = 0;
                curRotation   = 0;
                calcPieceDimensions();
                swapped       = true;
                dropThisCycle = true;
            }
            break;
    }
    renderBoard();
}

document.onkeypress = (event) =>
{
    if (event.key == "ArrowLeft")
    {
        server.onmessage({"data":"l"});
    }
    else if (event.key == "ArrowRight")
    {
        server.onmessage({"data":"r"});
    }
    else if (event.key == "ArrowUp")
    {
        server.onmessage({"data":"u"});
    }
    else if (event.key == "ArrowDown")
    {
        server.onmessage({"data":"d"});
    }
    else if (event.key == "c")
    {
        server.onmessage({"data":"c"});
    }
}