export interface ExecutionContext {
  requestId: string;
  timestamp: number;
  metadata?: Record<string, any>;
}