export function openAnimeNotLoading(animeId: string): void {
    this.$router.push(`/openAnimeView?animeId=${animeId}`);
}

export function openAnime(animeId: number) {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
    this.$router.push(`/openAnimeView?animeId=${animeId}`);
}

