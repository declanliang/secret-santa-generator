export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          id: string;
          group_name: string;
          organizer_name: string;
          event_type: string;
          exchange_date: string;
          budget_amount: number;
          budget_currency: string;
          custom_message: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          group_name: string;
          organizer_name: string;
          event_type: string;
          exchange_date: string;
          budget_amount: number;
          budget_currency: string;
          custom_message?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          group_name?: string;
          organizer_name?: string;
          event_type?: string;
          exchange_date?: string;
          budget_amount?: number;
          budget_currency?: string;
          custom_message?: string | null;
          created_at?: string;
        };
      };
      participants: {
        Row: {
          id: string;
          event_id: string;
          name: string;
          order_index: number;
          token: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          event_id: string;
          name: string;
          order_index: number;
          token: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          event_id?: string;
          name?: string;
          order_index?: number;
          token?: string;
          created_at?: string;
        };
      };
      restrictions: {
        Row: {
          id: string;
          event_id: string;
          participant_id: string;
          cannot_draw_participant_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          event_id: string;
          participant_id: string;
          cannot_draw_participant_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          event_id?: string;
          participant_id?: string;
          cannot_draw_participant_id?: string;
          created_at?: string;
        };
      };
      assignments: {
        Row: {
          id: string;
          event_id: string;
          giver_id: string;
          receiver_id: string;
          viewed_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          event_id: string;
          giver_id: string;
          receiver_id: string;
          viewed_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          event_id?: string;
          giver_id?: string;
          receiver_id?: string;
          viewed_at?: string | null;
          created_at?: string;
        };
      };
    };
  };
}
