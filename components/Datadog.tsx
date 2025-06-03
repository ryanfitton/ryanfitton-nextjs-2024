// Necessary if using App Router to ensure this file runs on the client
"use client";

import { datadogRum } from "@datadog/browser-rum";
import { reactPlugin } from '@datadog/browser-rum-react';

datadogRum.init({
    applicationId: '3e1261df-a39b-412c-9302-b73cb64a80c4',
    clientToken: 'pub53995fb88fb0beee4ab58537ead23268',
    site: 'datadoghq.com',
    service:'site',
    env: 'prod',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask-user-input",
    plugins: [reactPlugin({ router: true })],
});

export default function Datadog() {
    // Render nothing - this component is only included so that the init code
    // above will run client-side
    return null;
}