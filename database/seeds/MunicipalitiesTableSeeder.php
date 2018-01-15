<?php

use Illuminate\Database\Seeder;

class MunicipalitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tunis = \App\Models\City::where('name_en', '=', 'Tunis')->firstOrFail();

        \App\Models\Municipality::create(['name_fr'=> 'Tunis', 'name_en' => 'Tunis', 'name_ar' => 'تونس', 'city_id' => $tunis->id, 'is_active' => true]);
        \App\Models\Municipality::create(['name_fr'=> 'Le Bardo', 'name_en' => 'Le Bardo', 'name_ar' => 'باردو', 'city_id' => $tunis->id, 'is_active' => true]);
        \App\Models\Municipality::create(['name_fr'=> 'Le Kram', 'name_en' => 'Le Kram', 'name_ar' => 'الكرم', 'city_id' => $tunis->id, 'is_active' => true]);
        \App\Models\Municipality::create(['name_fr'=> 'La Goulette', 'name_en' => 'La Goulette', 'name_ar' => 'حلق الوادي', 'city_id' => $tunis->id, 'is_active' => true]);
        \App\Models\Municipality::create(['name_fr'=> 'Carthage', 'name_en' => 'Carthage', 'name_ar' => 'قرطاج', 'city_id' => $tunis->id, 'is_active' => true]);
        \App\Models\Municipality::create(['name_fr'=> 'Sidi Bou Said', 'name_en' => 'Sidi Bou Said', 'name_ar' => 'سيدي بو سعيد', 'city_id' => $tunis->id, 'is_active' => true]);
        \App\Models\Municipality::create(['name_fr'=> 'La Marsa', 'name_en' => 'La Marsa', 'name_ar' => 'المرسى', 'city_id' => $tunis->id, 'is_active' => true]);
        \App\Models\Municipality::create(['name_fr'=> 'Sidi Hassine', 'name_en' => 'Sidi Hassine', 'name_ar' => 'سيدي حسين', 'city_id' => $tunis->id, 'is_active' => true]);

        /*
        $ariana = \App\Models\City::where('name_en', '=', 'Ariana')->firstOrFail();

        \App\Models\Municipality::create(['name_fr'=> 'Ariana', 'name_en' => 'Ariana', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'La Soukra', 'name_en' => 'La Soukra', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Raoued', 'name_en' => 'Raoued', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Kalâat el-Andalous', 'name_en' => 'Kalâat el-Andalous', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Sidi Thabet', 'name_en' => 'Sidi Thabet', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Ettadhamen-Mnihla', 'name_en' => 'Ettadhamen-Mnihla', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);

        $benArous = \App\Models\City::where('name_en', '=', 'Ben Arous')->firstOrFail();

        \App\Models\Municipality::create(['name_fr'=> 'Ben Arous', 'name_en' => 'Ariana', 'name_ar' => 'تونس', 'city_id' => $benArous->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'El Mourouj', 'name_en' => 'El Mourouj', 'name_ar' => 'تونس', 'city_id' => $benArous->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Hammam Lif', 'name_en' => 'Hammam Lif', 'name_ar' => 'تونس', 'city_id' => $benArous->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Hammam Chott', 'name_en' => 'Hammam Chott', 'name_ar' => 'تونس', 'city_id' => $benArous->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Bou Mhel el-Bassatine', 'name_en' => 'Bou Mhel el-Bassatine', 'name_ar' => 'تونس', 'city_id' => $benArous->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Ezzahra', 'name_en' => 'Ezzahra', 'name_ar' => 'تونس', 'city_id' => $benArous->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Radès', 'name_en' => 'Radès', 'name_ar' => 'تونس', 'city_id' => $benArous->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Mégrine', 'name_en' => 'Mégrine', 'name_ar' => 'تونس', 'city_id' => $benArous->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Mohamedia-Fouchana', 'name_en' => 'Mohamedia-Fouchana', 'name_ar' => 'تونس', 'city_id' => $benArous->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Mornag', 'name_en' => 'Mornag', 'name_ar' => 'تونس', 'city_id' => $benArous->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Khalidia', 'name_en' => 'Khalidia', 'name_ar' => 'تونس', 'city_id' => $benArous->id, 'is_active' => false]);

        $manouba = \App\Models\City::where('name_en', '=', 'Manouba')->firstOrFail();

        \App\Models\Municipality::create(['name_fr'=> 'Manouba', 'name_en' => 'Manouba', 'name_ar' => 'منوبة', 'city_id' => $ariana->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Den Den', 'name_en' => 'Den Den', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Douar Hicher', 'name_en' => 'Douar Hicher', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Oued Ellil', 'name_en' => 'Oued Ellil', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Mornaguia', 'name_en' => 'Mornaguia', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Borj El Amri', 'name_en' => 'Borj El Amri', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Djedeida', 'name_en' => 'Djedeida', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'Tebourba', 'name_en' => 'Tebourba', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);
        \App\Models\Municipality::create(['name_fr'=> 'El Battan', 'name_en' => 'El Battan', 'name_ar' => 'تونس', 'city_id' => $ariana->id, 'is_active' => false]);

        */
    }
}
