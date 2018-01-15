<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('countries')->insert([
            'name_en' => 'Tunisia',
            'name_fr' => 'Tunisie',
            'name_ar' => 'تونس'
        ]);
    }
}
