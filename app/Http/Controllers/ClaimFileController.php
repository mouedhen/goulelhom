<?php
/**
 * Created by PhpStorm.
 * User: mouedhen
 * Date: 16/01/18
 * Time: 02:20
 */

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Storage;

class ClaimFileController extends Controller
{
    public function upload(Request $request)
    {
        if(!$request->hasFile('file'))
            return response()->json([
                'error' => 'No File Uploaded'
            ]);

        $file = $request->file('file');

        if(!$file->isValid())
            return response()->json([
                'error' => 'File is not valid!'
            ]);;

        // $filepath = $file->store('public/images');
        $file->store('public/images');

        return response()->json([
            'success' => 'File Uploaded'
        ]);

    }

    public function list()
    {
        $files = Storage::files('public/images');

        $output = [];

        foreach($files as $file) {
            $filename = basename($file);
            $output[] = asset('storage/images/' . $filename);
        }

        return $output;
    }
}