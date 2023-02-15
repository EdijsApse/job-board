<?php

namespace App\Enums;

enum ApplicationStatus: int {

    /**
     * Statuses
    */
    case Pending = 0;
    case Approved = 1;
    case Rejected = 2;
    case Canceled = 3;

    /**
     * Returns name for ApplicationStatus
     */
    public static function getStatusName(int $status_id)
    {
        $defaultName = 'Unknown';
        $status = self::tryFrom($status_id);

        if (!$status) {
            return $defaultName;
        }

        return match($status) {
            self::Pending => 'Pending',
            self::Approved => 'Approved',
            self::Rejected => 'Rejected',
            self::Canceled => 'Canceled'
        };
    }
}