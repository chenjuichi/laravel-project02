<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        //$this->call(UsersTableSeeder::class); //2020-09-30 add, for sanctum
        $this->call(RoleSeeder::class);         //2020-10-04 add for user roles and permissions
        $this->call(PermissionSeeder::class);   //2020-10-04 add for user roles and permissions
    }
}
