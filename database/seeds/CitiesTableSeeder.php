<?php

use Illuminate\Database\Seeder;

class CitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tunisia = \App\Models\Country::where('name_en', '=', 'Tunisia')->firstOrFail();

        \App\Models\City::create(['name_fr'=> 'Tunis',          'name_en' => 'Tunis',       'name_ar' => 'تونس',        'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Ariana',         'name_en' => 'Ariana',      'name_ar' => 'أريانة',      'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Ben Arous',      'name_en' => 'Ben Arous',   'name_ar' => 'بن عروس',     'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Nabeul',         'name_en' => 'Nabeul',      'name_ar' => 'نابل',       'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Manouba',        'name_en' => 'Manouba',     'name_ar' => 'منوبة',       'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Zaghouan',       'name_en' => 'Zaghouan',    'name_ar' => 'زغوان',       'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Bizerte',        'name_en' => 'Bizerte',     'name_ar' => 'بنزرت',       'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Béja',           'name_en' => 'Béja',        'name_ar' => 'باجة',        'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Jendouba',       'name_en' => 'Jendouba',    'name_ar' => 'جندوبة',      'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Kef',            'name_en' => 'Kef',         'name_ar' => 'الكاف',       'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Siliana',        'name_en' => 'Siliana',     'name_ar' => 'سليانة',      'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Sousse',         'name_en' => 'Sousse',      'name_ar' => 'سوسة',        'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Monastir',       'name_en' => 'Monastir',    'name_ar' => 'المنستير',    'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Mahdia',         'name_en' => 'Mahdia',      'name_ar' => 'المهدية',     'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Sfax',           'name_en' => 'Sfax',        'name_ar' => 'صفاقس',       'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Kairouan',       'name_en' => 'Kairouan',    'name_ar' => 'القيروان',    'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Kasserine',      'name_en' => 'Kasserine',   'name_ar' => 'القصرين',     'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Sidi Bouzid',    'name_en' => 'Sidi Bouzid', 'name_ar' => 'سيدي بوزيد',  'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Gabès',          'name_en' => 'Gabès',       'name_ar' => 'قابس',        'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Mednine',        'name_en' => 'Mednine',     'name_ar' => 'مدنين',       'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Tataouine',      'name_en' => 'Tataouine',   'name_ar' => 'تطاوين',      'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Gafsa',          'name_en' => 'Gafsa',       'name_ar' => 'قفصة',        'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Tozeur',         'name_en' => 'Tozeur',      'name_ar' => 'توزر',        'country_id' => $tunisia->id]);
        \App\Models\City::create(['name_fr'=> 'Kebili',         'name_en' => 'Kebili',      'name_ar' => 'قبلي',        'country_id' => $tunisia->id]);

    }
}
