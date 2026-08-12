import { type ExpoConfig, type ConfigContext } from 'expo/config';

import pkg from './package.json';

type AppVariant = 'development' | 'preview' | 'production';

interface VariantConfig {
  appName: string;
  bundleIdentifier: string;
}

const VARIANT_CONFIGS: Record<AppVariant, VariantConfig> = {
  development: {
    appName: '(Dev)sample-expo-sdk57',
    bundleIdentifier: 'com.sample.exposdk57.dev',
  },
  preview: {
    appName: '(Preview)sample-expo-sdk57',
    bundleIdentifier: 'com.sample.exposdk57.preview',
  },
  production: {
    appName: 'sample-expo-sdk57',
    bundleIdentifier: 'com.sample.exposdk57',
  },
};

/** Resolve the app configuration for the current environment variant. */
export const getVariantConfig = (): VariantConfig => {
  const variant = process.env.APP_VARIANT ?? process.env.EAS_BUILD_PROFILE ?? 'development';
  const isAppVariant = (v: string): v is AppVariant =>
    Object.prototype.hasOwnProperty.call(VARIANT_CONFIGS, v);
  if (!isAppVariant(variant)) {
    throw new Error(
      `Invalid APP_VARIANT "${variant}". Expected one of: ${Object.keys(VARIANT_CONFIGS).join(', ')}`,
    );
  }
  return VARIANT_CONFIGS[variant];
};

const variantConfig = getVariantConfig();

/** EAS project ID — shared by `extra.eas.projectId` and EAS Update URL. */
const EAS_PROJECT_ID = '96b331c1-fe43-4b2e-a744-0e64c0418e1d';

const config = ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: variantConfig.appName,
  slug: 'sample-expo-sdk57',
  version: pkg.version,
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'sampleexposdk57',
  userInterfaceStyle: 'automatic',
  ios: {
    supportsTablet: true,
    bundleIdentifier: variantConfig.bundleIdentifier,
    icon: './assets/expo.icon',
  },
  android: {
    adaptiveIcon: {
      backgroundColor: '#E6F4FE',
      foregroundImage: './assets/images/android-icon-foreground.png',
      backgroundImage: './assets/images/android-icon-background.png',
      monochromeImage: './assets/images/android-icon-monochrome.png',
    },
    package: variantConfig.bundleIdentifier,
    predictiveBackGestureEnabled: false,
  },
  web: {
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#208AEF',
        image: './assets/images/splash-icon.png',
        imageWidth: 76,
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  owner: 'packerman1212',
  extra: {
    eas: {
      projectId: EAS_PROJECT_ID,
    },
  },
});

export default config;
