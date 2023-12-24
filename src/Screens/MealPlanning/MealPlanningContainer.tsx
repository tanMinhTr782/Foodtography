import { MealPlanning } from "./MealPlanning";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

export const MealPlanningContainer = () => {
  const [userId, setUserId] = useState("9");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetUserQuery();

  useEffect(() => {
    fetchOne(userId);
  }, [fetchOne, userId]);

  return <MealPlanning data={data} isLoading={isLoading} />;
};
