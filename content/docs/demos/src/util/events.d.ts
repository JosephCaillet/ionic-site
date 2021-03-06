import { DomController } from '../util/dom-controller';
import { Platform } from '../platform/platform';
/**
 * @name Events
 * @description
 * Events is a publish-subscribe style event system for sending and responding to application-level
 * events across your app.
 *
 * @usage
 * ```ts
 * import { Events } from 'ionic-angular';
 *
 * constructor(public events: Events) {}
 *
 * // first page (publish an event when a user is created)
 * function createUser(user) {
 *   console.log('User created!')
 *   events.publish('user:created', user, Date.now());
 * }
 *
 * // second page (listen for the user created event)
 * events.subscribe('user:created', (user, time) => {
 *   // user and time are the same arguments passed in `events.publish(user, time)`
 *   console.log('Welcome', user, 'at', time);
 * });
 *
 * ```
 * @demo /docs//demos/src/events/
 */
export declare class Events {
    private _channels;
    /**
     * Subscribe to an event topic. Events that get posted to that topic will trigger the provided handler.
     *
     * @param {string} topic the topic to subscribe to
     * @param {function} handler the event handler
     */
    subscribe(topic: string, ...handlers: Function[]): void;
    /**
     * Unsubscribe from the given topic. Your handler will no longer receive events published to this topic.
     *
     * @param {string} topic the topic to unsubscribe from
     * @param {function} handler the event handler
     *
     * @return true if a handler was removed
     */
    unsubscribe(topic: string, handler?: Function): boolean;
    /**
     * Publish an event to the given topic.
     *
     * @param {string} topic the topic to publish to
     * @param {any} eventData the data to send as the event
     */
    publish(topic: string, ...args: any[]): any[];
}
/**
 * @private
 */
export declare function setupEvents(platform: Platform, dom: DomController): Events;
/**
 * @private
 */
export declare function setupProvideEvents(platform: Platform, dom: DomController): () => Events;
