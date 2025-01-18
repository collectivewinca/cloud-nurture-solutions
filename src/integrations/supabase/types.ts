export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      contact_requests: {
        Row: {
          best_time_to_call: string
          business_name: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string
          submitted_at: string
        }
        Insert: {
          best_time_to_call: string
          business_name: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone: string
          submitted_at?: string
        }
        Update: {
          best_time_to_call?: string
          business_name?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string
          submitted_at?: string
        }
        Relationships: []
      }
      epks: {
        Row: {
          bio: string | null
          created_at: string | null
          email: string | null
          followers: number | null
          genre: string | null
          id: string
          identifier: string
          instagram_posts: string[] | null
          instagram_url: string | null
          mixtapes: Json | null
          name: string
          photo_url: string | null
          shortened_link: string | null
          show_comments: boolean | null
          spotify_data: Json | null
          upcoming_events: Json | null
          updated_at: string | null
          youtube_data: Json | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          email?: string | null
          followers?: number | null
          genre?: string | null
          id?: string
          identifier: string
          instagram_posts?: string[] | null
          instagram_url?: string | null
          mixtapes?: Json | null
          name: string
          photo_url?: string | null
          shortened_link?: string | null
          show_comments?: boolean | null
          spotify_data?: Json | null
          upcoming_events?: Json | null
          updated_at?: string | null
          youtube_data?: Json | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          email?: string | null
          followers?: number | null
          genre?: string | null
          id?: string
          identifier?: string
          instagram_posts?: string[] | null
          instagram_url?: string | null
          mixtapes?: Json | null
          name?: string
          photo_url?: string | null
          shortened_link?: string | null
          show_comments?: boolean | null
          spotify_data?: Json | null
          upcoming_events?: Json | null
          updated_at?: string | null
          youtube_data?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "epks_identifier_fkey"
            columns: ["identifier"]
            isOneToOne: true
            referencedRelation: "musicians"
            referencedColumns: ["identifier"]
          },
        ]
      }
      musicians: {
        Row: {
          bio: string | null
          created_at: string | null
          email: string | null
          followers: number | null
          genre: string | null
          id: string
          identifier: string
          instagram_posts: string[] | null
          instagram_profile: Json | null
          last_updated: string | null
          name: string
          name_lw: string
          photo_url: string | null
          spotify_albums: Json | null
          spotify_artist: Json | null
          spotify_artist_data: Json | null
          spotify_single: Json | null
          tags: string | null
          youtube_channel_data: Json | null
          youtube_comments: Json | null
          youtube_playlists: Json | null
          youtube_popular_videos: Json | null
          youtube_recent_videos: Json | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          email?: string | null
          followers?: number | null
          genre?: string | null
          id?: string
          identifier: string
          instagram_posts?: string[] | null
          instagram_profile?: Json | null
          last_updated?: string | null
          name: string
          name_lw: string
          photo_url?: string | null
          spotify_albums?: Json | null
          spotify_artist?: Json | null
          spotify_artist_data?: Json | null
          spotify_single?: Json | null
          tags?: string | null
          youtube_channel_data?: Json | null
          youtube_comments?: Json | null
          youtube_playlists?: Json | null
          youtube_popular_videos?: Json | null
          youtube_recent_videos?: Json | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          email?: string | null
          followers?: number | null
          genre?: string | null
          id?: string
          identifier?: string
          instagram_posts?: string[] | null
          instagram_profile?: Json | null
          last_updated?: string | null
          name?: string
          name_lw?: string
          photo_url?: string | null
          spotify_albums?: Json | null
          spotify_artist?: Json | null
          spotify_artist_data?: Json | null
          spotify_single?: Json | null
          tags?: string | null
          youtube_channel_data?: Json | null
          youtube_comments?: Json | null
          youtube_playlists?: Json | null
          youtube_popular_videos?: Json | null
          youtube_recent_videos?: Json | null
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          subscribed_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          subscribed_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          subscribed_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
