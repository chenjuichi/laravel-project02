<?php
use App\User; //2020-09-30 add, for sanctum
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(User::class, 100)->create(); //2020-09-30 add, for sanctum
    }
}
