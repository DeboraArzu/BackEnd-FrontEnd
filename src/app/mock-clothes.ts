import { Cloth } from './cloth';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

// key that is used to access the data in local storage
const STORAGE_KEY = 'local_todolist';

export const CLOTHES: Cloth[] = [
    { codigo: 1, name: 'T-Shirt', cost: 70, size: 'S,M,L', color: 'blue' },
    { codigo: 2, name: 'Jacket', cost: 229, size: 'S,M,L', color: 'blue' },
    { codigo: 3, name: 'Jeans', cost: 249, size: '30-40', color: 'blue' },
    { codigo: 4, name: 'Shorts', cost: 150, size: '30-40', color: 'blue' },
    { codigo: 5, name: 'Crop Top', cost: 100, size: 'S,M,L', color: 'blue' }
];

@Injectable()
export class LocalStorageService {
    selectedRow: number;
    anotherTodolist = [];
    constructor(@Inject(SESSION_STORAGE) private storage:        StorageService) { }
     public storeOnLocalStorage(taskTitle: Cloth[]): void {
        //get array of tasks from local storage
        const currentTodoList = this.storage.get(STORAGE_KEY) || [];
        // push new task to array
        currentTodoList.push({
           title: CLOTHES
        });
        // insert updated array to local storage
        this.storage.set(STORAGE_KEY, currentTodoList);
        console.log(this.storage
           .get(STORAGE_KEY) || 'LocaL storage is empty');
    }
}

