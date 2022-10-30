import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';

import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    // constructor(private boardsServicde:BoardsService){}

    // @Get('/')
    // getAllBoard(): Board[]{
    //     return this.boardsServicde.getAllBoards();

    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() createBoardDto: CreateBoardDto
    // ): Board {
    //     return this.boardsServicde.createBoard(createBoardDto);
    // } 

    // @Get('/:id')
    // getBoardById(@Param('id') id:string): Board{
    //     return this.boardsServicde.getBoardById(id);
    // }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id:string):void{
    //     this.boardsServicde.deleteBoard(id);
    // }
    
    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id:string,
    //     @Body('status', BoardStatusValidationPipe) status:BoardStatus,
    // ){
    //     return this.boardsServicde.updateBoardStatus(id,status);
    // }

}
