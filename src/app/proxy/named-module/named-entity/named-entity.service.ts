import type { NamedEntityDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NamedEntityService {
  apiName = 'Default';
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, NamedEntityDto>({
      method: 'GET',
      url: `/api/named-module/namedEntity/${id}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
