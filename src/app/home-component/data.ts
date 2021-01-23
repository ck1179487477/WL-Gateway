import { Menu } from './menu';
import { Product } from './product';
import { Button } from 'protractor';

export const MENUS: Menu[] = [
    { name: '特性', url: '#' },
    { name: '咨询', url: '#' },
    { name: '支持', url: '#' },
    { name: '价格', url: '#' },
]

export const PRODUCTS: Product[] = [
    { category: '测试版', pricing: { price: 10, unit: '月' }, features: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'], action: '联系我们' },
    { category: '普通版', pricing: { price: 15, unit: '月' }, features: ['20 users included', '10 GB of storage', 'Priority email support', 'Help center access'], action: '注册免费使用' },
    { category: '完整版', pricing: { price: 20, unit: '月' }, features: ['30 users included', '15 GB of storage', 'Phone and email support', 'Help center access'], action: '立即使用' }
];
