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
