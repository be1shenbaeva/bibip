"use client";

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { bibipTripApi } from "@/services/BibipTripService";
import { Provider } from "react-redux";
import { store } from "@/store";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ApiProvider api={bibipTripApi}>
    <Provider store={store}>{children}</Provider>
  </ApiProvider>
);

export default Providers;
