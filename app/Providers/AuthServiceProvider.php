<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use App\Models\User;
use App\Models\Education;
use App\Models\Experience;
use App\Models\Job;
use App\Models\ResumeLanguage;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('update-resume', function (User $user) {
            return $user->isCandidate();
        });

        Gate::define('update-company', function (User $user) {
            return $user->isEmployer();
        });

        Gate::define('post-jobs', function (User $user) {
            return $user->company ? true : false;
        });

        Gate::define('edit-job', function (User $user, Job $job) {
            return $user->company && $job->company_id === $user->company->id;
        });

        Gate::define('edit-education', function (User $user, Education $education) {
            return $education->user_id === $user->id;
        });

        Gate::define('edit-experience', function (User $user, Experience $experience) {
            return $experience->user_id === $user->id;
        });

        Gate::define('edit-resume-language', function (User $user, ResumeLanguage $resumeLanguage) {
            return $resumeLanguage->user_id === $user->id;
        });

        Gate::define('apply-for-job', function (User $user) {
            return $user->isCandidate();
        });
    }
}
