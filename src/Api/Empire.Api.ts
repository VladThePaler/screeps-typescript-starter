
export default class Empire {

    /**
     * search for new flags and properly commit them
     */
    public static processNewFlags(): void {
        // just searches for a flag that isn't in memory yet
        // and calls the helper function for it
        // ie new remote room flag adds the remote room to proper memory slot, etc
    }

    /**
     * remove a flag and its consequences from memory
     * @param flag the flag we want to remove
     */
    public static removeFlagMemory(flag: Flag): void {
        // pass it a single flag and it removes it and
        // its associated memory and stuff
    }

    /**
     * commit a remote flag to memory
     * @param flag the flag we want to commit
     */
    public static processNewRemoteFlag(flag: Flag): void {
        // save the remote room into the proper memory blah blah blah
    }

    /**
     * commit a attack flag to memory
     * @param flag the flag we want to commit
     */
    public static processNewAttackFlag(flag: Flag): void {
        // save the attack room into the proper memory blah blah blah
    }

    /**
     * commit a claim flag to memory
     * @param flag the flag we want to commit
     */
    public static processNewClaimFlag(flag: Flag): void {
        // save the claim room into the proper memory blah blah blah
    }

    /**
     * look for dead flags (memory with no associated flag existing) and remove them
     */
    public static cleanDeadFlags(): void {
        // goes over all flags in memory and makes sure theres still
        // a flag for it, call remove flag function if we need to
    }

    /**
     * finds the closest colonized room to support a
     * Remote/Attack/Claim room
     * Calls helper functions to decide auto or over-ride
     * @param targetRoom the room we want to support
     */
    public static findDependentRoom(targetRoom: Room): string {
        // find the closest room, maybe some additional filters to make
        // sure the room is actually closest not just by distance idk
        return "";
    }

    /**
     * Automatically come up with a dependent room
     * @param targetRoom the room we want to support
     */
    private static findDependentRoomAuto(targetRoom: Room): string {
        // This will be called if theres no override in place
        return "";
    }

    /**
     * Manually get the dependent room based on flags
     * @param targetRoom the room we want to support
     */
    private static findDependentRoomManual(targetRoom: Room): string {
        // This will be called if an override is requested via flag
        return "";
    }


};
