export function convertSecondsToHoursString(second: number) {
    const hours = Math.floor(second / 3600)
    const minutes = Math.floor((second % 3600) / 60)
    const seconds = second % 60

    const hoursString = [hours, minutes, seconds].map(unit => String(unit).padStart(2, "0")).join(":");

    return hoursString;
}