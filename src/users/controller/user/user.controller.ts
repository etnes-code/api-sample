
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getAllUsers() {
        // Logic to get all users
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        // Logic to get user by ID
    }

    @Post()
    createUser(@Body() user: any) {
        // Logic to create a new user
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() user: any) {
        // Logic to update user by ID
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        // Logic to delete user by ID
    }
}
