import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'test', // Adding new tests or correcting existing tests
                'fix', // Fixing failing tests
                'docs', // Documentation only changes
                'refactor', // A code change that neither fixes a test nor adds a test
                'chore', // Changes to the build process or auxiliary tools and libraries
                'ci', // Changes to CI configuration files and scripts
                'config', // Changes to configuration files
                'setup', // Changes to setup files
            ],
        ],
    },
};

export default Configuration;
