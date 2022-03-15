import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('/api/user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get('/:userId')
    async getUser(@Param('userId') userId, @Res() res) {
        try {
            let userData = this.userService.getAllUser();
        } catch (error) {

        }
    }
    @Get('/')
    async getAllUser(@Res() res) {
        try {
            let userData = await this.userService.getAllUser()
        } catch (error) {
        }
    }
    @Post('/')
    async registerUser(@Body() Body, @Res() res) {
        try {
            let registerUser = await this.userService.registerUser()
        } catch (error) {

        }
    }
    @Post('/login')
    async loginUser(@Body() body, @Res() res) {
        try {
            let loginUser = await this.userService.loginUser()
        } catch (error) {


        }
    }
    @Put('/:userId')
    async updateUser() {
        try {
            let updateUser = await this.userService.updateUser()
        } catch (error) {

        }
    }
    @Delete('/:userId')
    async deleteUser() {
        try {
            let deletedUser = await this.userService.deleteUser()
        } catch (error) {

        }
    }

}