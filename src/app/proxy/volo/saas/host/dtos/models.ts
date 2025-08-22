import type { ExtensibleEntityDto } from '@abp/ng.core';
import type { TenantActivationState } from '../../tenant-activation-state.enum';

export interface SaasTenantDto extends ExtensibleEntityDto<string> {
  name?: string;
  editionId?: string;
  editionEndDateUtc?: string;
  editionName?: string;
  hasDefaultConnectionString: boolean;
  activationState?: TenantActivationState;
  activationEndDate?: string;
  concurrencyStamp?: string;
}
