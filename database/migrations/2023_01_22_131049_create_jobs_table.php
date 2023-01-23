<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('company_id');
            $table->unsignedBigInteger('city_id');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('employment_type_id');
            $table->unsignedBigInteger('salary_type_id');
            $table->string('jobtitle');
            $table->string('street');
            $table->double('min_salary', 10, 2);
            $table->double('max_salary', 10, 2);
            $table->text('description');
            $table->json('requirements')->nullable();
            $table->json('responsibilities')->nullable();
            $table->date('expiration_date');
            $table->integer('years_of_experience_required')->nullable();
            $table->boolean('is_urgent')->default(false);
            $table->boolean('is_featured')->default(false);
            $table->string('image')->nullable();
            $table->timestamps();

            $table->foreign('company_id')->references('id')->on('companies');
            $table->foreign('city_id')->references('id')->on('cities');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('employment_type_id')->references('id')->on('employment_types');
            $table->foreign('salary_type_id')->references('id')->on('salary_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
};
