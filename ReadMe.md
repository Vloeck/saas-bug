# Bug
## Instructions

I have the following installed:
```shell
dotnet tool list -g
```

```text
Package Id               Version      Commands
-----------------------------------------------
volo.abp.studio.cli      1.2.1        abp
```

This is a JavaScript project, so you need to run `yarn install` first.

To reproduce the bug, run the following commands in two separate terminals:

```shell
npm run serve
```

and then in the other terminal:

```shell
abp generate-proxy -t ng -m named-module -url http://localhost:3000
```

gets you:

```text
[17:02:03 INF] You are running the second generation of the ABP CLI. If you're interested in the legacy CLI, see https://abp.io/new-cli
DELETE src/app/proxy/named-module
DELETE src/app/proxy/volo
UPDATE src/app/proxy/generate-proxy.json (405830 bytes)
UPDATE src/app/proxy/README.md (1000 bytes)
UPDATE src/app/proxy/named-module/named-entity/named-entity.service.ts (529 bytes)
UPDATE src/app/proxy/named-module/named-entity/dtos/models.ts (403 bytes)
UPDATE src/app/proxy/volo/saas/host/dtos/models.ts (444 bytes)
UPDATE src/app/proxy/volo/saas/tenant-activation-state.enum.ts (232 bytes)
UPDATE src/app/proxy/named-module/named-entity/dtos/index.ts (26 bytes)
UPDATE src/app/proxy/named-module/named-entity/index.ts (89 bytes)
UPDATE src/app/proxy/named-module/index.ts (71 bytes)
UPDATE src/app/proxy/volo/saas/host/dtos/index.ts (26 bytes)
UPDATE src/app/proxy/volo/saas/host/index.ts (49 bytes)
UPDATE src/app/proxy/volo/saas/index.ts (97 bytes)
UPDATE src/app/proxy/volo/index.ts (49 bytes)
UPDATE src/app/proxy/index.ts (109 bytes)
```

The wrong type can be found in `src/app/proxy/named-module/named-entity/dtos/models.ts` line 11:

```typescript
import type { FullAuditedEntityDto } from '@abp/ng.core';
import type { SaasTenantDto } from '../../../volo/saas/host/dtos/models';

export interface NamedEntityDto extends FullAuditedEntityDto<string> {
  name?: string;
  namedEntityTenants: NamedEntityTenantDto[];
}

export interface NamedEntityTenantDto extends FullAuditedEntityDto<string> {
  namedEntityId: string;
  tenant: SaasSaasTenantDto;
}
```