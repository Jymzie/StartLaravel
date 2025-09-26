<?php

namespace App\DTO;

class DTOMaster{
    public $EmployeeName;
    public $DepartmentName;
    public $SectionName;

    /**
     * Get the value of EmployeeName
     */ 
    public function getEmployeeName()
    {
        return $this->EmployeeName;
    }

    /**
     * Set the value of EmployeeName
     *
     * @return  self
     */ 
    public function setEmployeeName($EmployeeName)
    {
        $this->EmployeeName = $EmployeeName;

        return $this;
    }

    /**
     * Get the value of DepartmentName
     */ 
    public function getDepartmentName()
    {
        return $this->DepartmentName;
    }

    /**
     * Set the value of DepartmentName
     *
     * @return  self
     */ 
    public function setDepartmentName($DepartmentName)
    {
        $this->DepartmentName = $DepartmentName;

        return $this;
    }

    /**
     * Get the value of SectionName
     */ 
    public function getSectionName()
    {
        return $this->SectionName;
    }

    /**
     * Set the value of SectionName
     *
     * @return  self
     */ 
    public function setSectionName($SectionName)
    {
        $this->SectionName = $SectionName;

        return $this;
    }
}