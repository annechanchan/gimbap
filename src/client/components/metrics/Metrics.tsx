import React from 'react';

import { SubPage } from './../../types';

import RouteLoad from './RouteLoad';
import ClusterLoad from './ClusterLoad';

export default function Metrics({
  useLightTheme,
  metricSubPage,
}: {
  useLightTheme: boolean;
  metricSubPage: SubPage;
}) {
  return (<>
    {metricSubPage === SubPage.RouteLoads && <RouteLoad useLightTheme={useLightTheme} />}
    {metricSubPage === SubPage.ClusterLoad && <ClusterLoad useLightTheme={useLightTheme} />}
  </>);
}