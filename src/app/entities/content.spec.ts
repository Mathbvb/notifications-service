/* eslint-disable prettier/prettier */
import { Content } from "./content"

describe('Notification content', () => {
    it('it should be able to create a notification content', () => {
        const content = new Content('Voce tem uma notificacao')

        expect(content).toBeTruthy();
    });

    it('it shouldnt be able to create a notification content with less than 5 characters', () => {
        expect(() => new Content('not')).toThrow();
    });

    it('it shouldnt be able to create a notification content with more than 240 characters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow();
    });

});